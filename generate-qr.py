import qrcode
from PIL import Image, ImageDraw

# Create QR code for the website
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=2,
)

qr.add_data('https://digital-estate-orcin.vercel.app')
qr.make(fit=True)

# Create the QR code image
img = qr.make_image(fill_color="black", back_color="white")

# Save the QR code
img.save('public/qr-code.png')
print("QR code generated successfully at public/qr-code.png")
