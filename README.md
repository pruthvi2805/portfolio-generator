# Portfolio Generator

A tool to create professional portfolio websites. Fill in your details, pick a theme, and download a ready-to-host ZIP file.

**Live:** https://generator.kpruthvi.com

## Structure

```
├── index.html          # Main application
├── css/
│   └── generator.css   # Styles
├── js/
│   ├── generator.js    # Main logic
│   ├── themes.js       # Theme definitions
│   └── templates.js    # HTML/CSS templates
└── libs/
    ├── jszip.min.js    # ZIP creation
    └── FileSaver.min.js # Download handling
```

## Development

Open `index.html` in a browser to preview locally.

## Deployment

Hosted on Cloudflare Pages. Pushes to `main` branch auto-deploy.
