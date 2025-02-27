/**
 * Script para gerar ícones PWA a partir do logo da empresa
 * 
 * Para usar este script, instale as dependências necessárias:
 * npm install sharp
 * 
 * E então execute:
 * node scripts/generate-icons.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// ES modules não têm __dirname, então precisamos criar uma alternativa
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_LOGO = path.join(__dirname, '../public/icons/logo-10-anos-preto.png');
const OUTPUT_DIR = path.join(__dirname, '../public/icons');

// Tamanhos de ícones necessários para PWA
const ICON_SIZES = [
  72,
  96,
  128,
  144,
  152,
  192,
  384,
  512
];

// Certifique-se de que o diretório de saída existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Gera ícones para cada tamanho
async function generateIcons() {
  try {
    console.log(`Gerando ícones a partir de ${SOURCE_LOGO}...`);
    
    // Gerar o ícone para cada tamanho
    for (const size of ICON_SIZES) {
      const outputFile = path.join(OUTPUT_DIR, `icon-${size}x${size}.png`);
      
      await sharp(SOURCE_LOGO)
        .resize(size, size)
        .toFile(outputFile);
      
      console.log(`✓ Gerado: icon-${size}x${size}.png`);
    }
    
    // Gerar ícone mascarável
    await sharp(SOURCE_LOGO)
      .resize(196, 196)
      .toFile(path.join(OUTPUT_DIR, 'maskable-icon.png'));
    
    console.log(`✓ Gerado: maskable-icon.png`);
    
    // Gerar ícone para Apple Touch
    await sharp(SOURCE_LOGO)
      .resize(180, 180)
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    
    console.log(`✓ Gerado: apple-touch-icon.png`);
    
    console.log('\nTodos os ícones foram gerados com sucesso!');
    console.log('\nAgora você pode executar o build da aplicação:');
    console.log('npm run build');
  } catch (error) {
    console.error('Erro ao gerar ícones:', error);
  }
}

generateIcons(); 