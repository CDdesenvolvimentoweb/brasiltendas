# Ícones PWA para Brasil Tendas

Este diretório deve conter os ícones necessários para a funcionalidade PWA. Para completar a implementação, você precisa adicionar os seguintes ícones:

- `icon-72x72.png` (72x72px)
- `icon-96x96.png` (96x96px)
- `icon-128x128.png` (128x128px)
- `icon-144x144.png` (144x144px)
- `icon-152x152.png` (152x152px)
- `icon-192x192.png` (192x192px)
- `icon-384x384.png` (384x384px)
- `icon-512x512.png` (512x512px)
- `maskable-icon.png` (196x196px) - Este é um ícone especial que suporta máscaras em diferentes formatos de ícone

## Como criar os ícones

Você pode gerar todos esses ícones a partir do seu logo usando ferramentas como:

1. [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
2. [RealFaviconGenerator](https://realfavicongenerator.net/)
3. [PWABuilder Image Generator](https://www.pwabuilder.com/imageGenerator)

## Adicionando um ícone para Apple Touch

Além dos ícones acima, adicione também:

- `apple-touch-icon.png` (180x180px) - Este é usado para dispositivos iOS quando o aplicativo é adicionado à tela inicial

## Testando

Depois de adicionar todos os ícones, execute `npm run build` e teste sua aplicação. Verifique se ela pode ser instalada como um PWA e se os ícones aparecem corretamente. 