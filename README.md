# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Media Optimization Guide

This guide explains how to compress images for web using **Sharp CLI** in a React project.

---

## 1. Compress a Single Image

Use the following command to resize and compress a single image:

```bash
# Create output folder if not exists
mkdir optimized

# Compress and resize
sharp -i "22.webp" -o "./22.webp" --resize 1920 --quality 60

sharp -i 22.jpg -o ./optimized/22.webp resize 1920 -q 60



2. Compress All Images in Folder

mkdir optimized

Get-ChildItem *.jpg, *.png | ForEach-Object {
    $inputFile = $_.FullName
    $fileName = $_.BaseName
    sharp -i $inputFile -o "./optimized/${fileName}.webp" resize 1920 -q 60
}
```

#Backend

sudo systemctl restart ssn_gunicorn
sudo systemctl status ssn_gunicorn
sudo systemctl restart nginx

# access terminal vps hosting

you can do it through the hostinger website or
ssh root@167.88.44.111
Password-

now you are good to go

#activate virtual environment

source venv/bin/activate
