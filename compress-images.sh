#!/bin/bash

# Script to compress landing page images using macOS sips
# This will significantly improve Lighthouse performance scores

echo "🖼️  Compressing landing page images..."
echo "⚠️  This will OVERWRITE your original images. Backup recommended!"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Aborted."
    exit 1
fi

cd public/LandingPage || exit

# Create backup directory
mkdir -p backups
echo "📦 Creating backups..."
cp land*.jpg backups/

echo ""
echo "🔄 Compressing images..."

# Compress each landing page image
for file in land*.jpg; do
    if [ -f "$file" ]; then
        original_size=$(du -h "$file" | cut -f1)
        echo "Processing $file (original: $original_size)..."

        # Resize to max 1920px width and reduce quality to 85%
        sips -Z 1920 --setProperty formatOptions 85 "$file" > /dev/null 2>&1

        new_size=$(du -h "$file" | cut -f1)
        echo "  ✓ Compressed to $new_size"
    fi
done

echo ""
echo "✅ Done! Images compressed."
echo "📁 Backups saved in: public/LandingPage/backups/"
echo ""
echo "Before/After sizes:"
ls -lh land*.jpg | awk '{print $9, $5}'
