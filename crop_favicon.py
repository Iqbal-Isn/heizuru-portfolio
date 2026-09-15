from PIL import Image

def trim_transparent(image_path, output_path):
    img = Image.open(image_path)
    
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        alpha = img.convert('RGBA').split()[-1]
        bbox = alpha.getbbox()
        if bbox:
            img = img.crop(bbox)
            # To make it look perfect for a favicon, we can make it square
            width, height = img.size
            max_dim = max(width, height)
            square_img = Image.new('RGBA', (max_dim, max_dim), (255, 255, 255, 0))
            offset = ((max_dim - width) // 2, (max_dim - height) // 2)
            square_img.paste(img, offset)
            square_img.save(output_path)
        else:
            img.save(output_path)
    else:
        img.save(output_path)

if __name__ == "__main__":
    trim_transparent('public/logo.png', 'public/favicon-cropped.png')
