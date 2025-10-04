#!/usr/bin/env python3
"""
Generate OG image for Digital Estate website
Requires: pip install pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image():
    # Create image 1200x630
    width, height = 1200, 630
    
    # Create gradient background (dark to darker)
    img = Image.new('RGB', (width, height), color='#0a0a0a')
    draw = ImageDraw.Draw(img)
    
    # Add gradient effect (dark gray to black)
    for y in range(height):
        color_val = int(10 + (16 - 10) * (y / height))
        draw.rectangle([(0, y), (width, y+1)], fill=f'#{color_val:02x}{color_val:02x}{color_val:02x}')
    
    # Add radial glow effects (simulated with circles)
    # Gold glow top right
    for i in range(100, 0, -5):
        alpha = int(40 * (i / 100))
        # Convert to RGB since PIL doesn't support RGBA in this context easily
        # We'll just overlay lighter colors
        if i % 10 == 0:  # Every 10th iteration
            draw.ellipse([900 - i*3, -100 - i*3, 900 + i*3, -100 + i*3], 
                        fill=f'#{min(255, 26+alpha):02x}{min(255, 20+alpha):02x}{min(255, 10+alpha):02x}')
    
    # Purple glow bottom left
    for i in range(80, 0, -5):
        alpha = int(30 * (i / 80))
        if i % 10 == 0:
            draw.ellipse([-100 - i*2, 450 - i*2, -100 + i*2, 450 + i*2],
                        fill=f'#{min(255, 20+alpha):02x}{min(255, 10+alpha):02x}{min(255, 26+alpha):02x}')
    
    # Try to use default fonts or fallback
    try:
        # Try to load a nice font
        font_title = ImageFont.truetype("arial.ttf", 72)
        font_subtitle = ImageFont.truetype("arial.ttf", 32)
        font_tag = ImageFont.truetype("arial.ttf", 20)
    except:
        # Fallback to default
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()
        font_tag = ImageFont.load_default()
    
    # Draw text
    # Title - broken into 3 lines
    y_offset = 120
    draw.text((80, y_offset), "Private Servers,", font=font_title, fill='#ffffff')
    draw.text((80, y_offset + 85), "Smart Estates &", font=font_title, fill='#ffffff')
    draw.text((80, y_offset + 170), "On-Prem AI", font=font_title, fill='#D4A574')  # Gold
    
    # Subtitle
    draw.text((80, y_offset + 260), "Digital Estate Architect — Chicago", 
              font=font_subtitle, fill='#b3b3b3')
    
    # Tags/features at bottom
    tag_y = 500
    draw.rectangle([80, tag_y, 350, tag_y + 40], outline='#D4A574', width=2)
    draw.text((90, tag_y + 8), "Zero-Trust Networks", font=font_tag, fill='#D4A574')
    
    draw.rectangle([370, tag_y, 650, tag_y + 40], outline='#D4A574', width=2)
    draw.text((380, tag_y + 8), "Sovereign Infrastructure", font=font_tag, fill='#D4A574')
    
    draw.rectangle([670, tag_y, 830, tag_y + 40], outline='#D4A574', width=2)
    draw.text((680, tag_y + 8), "Local AI", font=font_tag, fill='#D4A574')
    
    # Footer
    draw.text((80, 570), "Chicago, IL - On-Site & Remote", 
              font=font_tag, fill='#808080')
    draw.text((900, 570), "digital-estate-orcin.vercel.app", 
              font=font_tag, fill='#D4A574')
    
    # Save
    output_path = os.path.join('public', 'og-image.jpg')
    img.save(output_path, 'JPEG', quality=95, optimize=True)
    print(f"✅ OG image saved to {output_path}")
    print(f"   Size: 1200x630px")
    print(f"   Format: JPEG")
    return output_path

if __name__ == '__main__':
    create_og_image()
