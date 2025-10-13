const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const teamDir = path.join(__dirname, '../public/team');
const optimizedDir = path.join(__dirname, '../public/team/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all JPG files
const files = fs.readdirSync(teamDir).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Found ${files.length} images to optimize...`);

// Process each image
files.forEach(async (file) => {
  const inputPath = path.join(teamDir, file);
  const outputPath = path.join(optimizedDir, file.toLowerCase());
  
  try {
    await sharp(inputPath)
      .resize(400, 400, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024).toFixed(2)}KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
});

console.log('\nOptimization complete! Optimized images are in public/team/optimized/');
console.log('Review the optimized images, then move them to replace the originals.');

