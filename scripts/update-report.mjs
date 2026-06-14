import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT    = join(__dirname, '..');
const REPORT  = join(ROOT, 'technical-report.html');

const SOURCE_RE = /\.(tsx?|jsx?|css|mjs)$|package\.json$|tailwind\.config\.ts$|next\.config\.mjs$|tsconfig\.json$/;

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', c => raw += c);
process.stdin.on('end', () => {
  try {
    const { tool_name, tool_input } = JSON.parse(raw);
    const fp = tool_input?.file_path ?? '';

    if (!fp || fp.includes('technical-report') || fp.includes('update-report') || !SOURCE_RE.test(fp)) {
      process.exit(0);
    }

    const rel  = fp.replace(/\\/g, '/').replace(/.*property-dreamz\//, '');
    const tipo = tool_name === 'Write' ? 'Nuevo archivo' : 'Modificado';
    const now  = new Date();
    const fecha = now.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
    const hora  = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

    let html = readFileSync(REPORT, 'utf8');

    // 1. Actualizar fecha del análisis en la portada
    html = html.replace(
      /(<div class="cover-meta-value">)((?:Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)[^<]+|Junio 2026)(<\/div>)/,
      `$1${fecha}$3`
    );

    // 2. Añadir entrada al changelog (o crear la sección si no existe)
    const ROW    = `\n        <tr><td><code>${rel}</code></td><td>${fecha} ${hora}</td><td>${tipo}</td></tr>`;
    const MARKER = '<!-- CHANGELOG_ROWS -->';

    if (html.includes(MARKER)) {
      html = html.replace(MARKER, MARKER + ROW);
    } else {
      const section = `
  <!-- ═══ CHANGELOG AUTOMÁTICO ═══ -->
  <div class="section" style="margin-top:32px;">
    <div class="section-label">Changelog automático</div>
    <h2>Archivos Modificados Recientemente</h2>
    <p class="muted">Esta tabla se actualiza automáticamente cada vez que se edita un archivo fuente del proyecto.</p>
    <table>
      <thead><tr><th>Archivo</th><th>Fecha / Hora</th><th>Tipo de cambio</th></tr></thead>
      <tbody>${MARKER}${ROW}
      </tbody>
    </table>
  </div>`;
      html = html.replace(
        '<div class="report-footer">',
        section + '\n\n<div class="report-footer">'
      );
    }

    writeFileSync(REPORT, html, 'utf8');
  } catch (_) {
    // silencioso — nunca interrumpir el flujo de Claude
  }
  process.exit(0);
});
