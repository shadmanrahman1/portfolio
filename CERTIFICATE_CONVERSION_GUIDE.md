# Certificate Conversion Guide

## Converting PDF Certificates to Images for Web Display

Your certificates are currently stored as PDFs in the `assets/certificates` folder. To display them properly on your website, you need to convert them to image formats (PNG or JPG).

### Method 1: Online Conversion (Easiest)

1. **Visit any of these free online converters:**
   - [PDF24.org](https://tools.pdf24.org/en/pdf-to-jpg)
   - [SmallPDF](https://smallpdf.com/pdf-to-jpg)
   - [ILovePDF](https://www.ilovepdf.com/pdf_to_jpg)

2. **Upload your PDF files one by one:**
   - Navigate to `assets/certificates/` folder
   - Upload each PDF certificate
   - Choose output format: PNG (recommended) or JPG
   - Download the converted images

3. **Save converted images:**
   - Create folder: `assets/images/certificates/`
   - Save images with clear names like:
     - `machine_learning_specialization.png`
     - `neural_networks_deep_learning.png`
     - `ibm_machine_learning.png`
     - `data_analysis_python.png`
     - `advanced_learning_algorithms.png`
     - `sql_with_python.png`

### Method 2: Using PowerShell (Windows)

If you have ImageMagick installed:

```powershell
# Navigate to certificates folder
cd "assets/certificates"

# Convert all PDFs to PNG (requires ImageMagick)
Get-ChildItem -Filter "*.pdf" | ForEach-Object {
    $outputName = $_.BaseName + ".png"
    magick convert $_.FullName "../images/certificates/$outputName"
}
```

### Method 3: Using Browser Screenshot

1. Open each PDF in your browser
2. Take a high-quality screenshot
3. Save as PNG in `assets/images/certificates/`

### After Conversion

Once you have the images, update the HTML file by replacing the placeholder URLs:

**Find and replace these URLs in index.html:**
- `https://via.placeholder.com/400x300.png?text=Machine+Learning+Specialization`
- `https://via.placeholder.com/400x300.png?text=Neural+Networks+Deep+Learning`
- etc.

**With actual image paths:**
- `assets/images/certificates/machine_learning_specialization.png`
- `assets/images/certificates/neural_networks_deep_learning.png`
- etc.

### File Structure After Conversion

```
assets/
├── certificates/          (PDF files)
│   ├── Machine Learning Specialization.pdf
│   ├── Neural Networks and Deep Learning by Deeplearning_AI.pdf
│   └── ... (other PDFs)
├── images/
│   ├── certificates/      (Converted images)
│   │   ├── machine_learning_specialization.png
│   │   ├── neural_networks_deep_learning.png
│   │   └── ... (other images)
│   ├── profile.png
│   ├── Biomed Chatbot.png
│   └── Disease_Prediction_system.png
└── SHADMAN_CV.pdf
```

### Tips

- Use high resolution (at least 800x600) for better quality
- PNG format is recommended for text-heavy certificates
- Keep file names short and use underscores instead of spaces
- Optimize images for web (keep file size under 500KB per image)

Once you convert the certificates to images, your portfolio will display actual certificate thumbnails instead of placeholders!
