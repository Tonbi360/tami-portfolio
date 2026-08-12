import os
import sys
import subprocess
import shutil

# Target directory
TARGET_DIR = os.path.join("public", "images")
os.makedirs(TARGET_DIR, exist_ok=True)

# List of assets to map
LOGOS = {
    "1": ("logo-uc-church.jpg", "UC Church Circular Logo"),
    "2": ("logo-alpha-omega.jpg", "Alpha Omega (Amazon Smile Parody)"),
    "3": ("logo-square.jpg", "Square loop icon logo"),
    "4": ("logo-designer-pain.jpg", "Designer back pain stick figure"),
    "5": ("logo-arrow-four.jpg", "Arrow number four logo"),
    "6": ("logo-more.jpg", "MORE wordmark logo"),
    "7": ("logo-tower.jpg", "Tower with broadcasting arcs logo")
}

FLYERS = {
    "1": ("flyer-oma-chioma.jpg", "Oma Chioma Birthday Flyer"),
    "2": ("flyer-sports-tryout.jpg", "Sports Tryout Flyer"),
    "3": ("flyer-olite-stationery.jpg", "Olite Stationery Flyer"),
    "4": ("flyer-adesuwa-glyde.jpg", "Adesuwa Glyde Birthday Flyer"),
    "5": ("flyer-year-end-sales.jpg", "Year End Sales Flyer"),
    "6": ("flyer-aces-derby.jpg", "ACES Derby Flyer"),
    "7": ("flyer-aces-tryout.jpg", "ACES Tryout Flyer"),
    "8": ("flyer-world-tammy-day.jpg", "World Tammy Day Flyer"),
    "9": ("flyer-queen-of-beauty.jpg", "Queen of Beauty Pageant Flyer"),
    "10": ("flyer-new-year-2026.jpg", "Happy New Year 2026 Flyer"),
    "11": ("graphic-october-basketball.jpg", "October Basketball Graphic")
}

def open_image(filepath):
    """Opens the image using the system's default viewer."""
    if sys.platform.startswith('darwin'):
        subprocess.call(('open', filepath))
    elif os.name == 'nt':
        os.startfile(filepath)
    elif os.name == 'posix':
        subprocess.call(('xdg-open', filepath))

def main():
    source_dir = "images ref"
    if not os.path.exists(source_dir):
        print(f"Error: Could not find '{source_dir}' directory.")
        return

    files = [f for f in os.listdir(source_dir) if f.endswith(('.jpg', '.png', '.jpeg'))]
    
    print("\n--- Starting Tami Portfolio Asset Renamer ---\n")
    
    for filename in files:
        filepath = os.path.join(source_dir, filename)
        
        # 1. Handle Screenshots (11_00PM) - Ignore
        if "11_00PM" in filename:
            print(f"Skipping WhatsApp Chat Screenshot: {filename}")
            continue
            
        # 2. Handle ID Card (11_01PM) - Auto rename
        if "11_01PM" in filename:
            dest = os.path.join(TARGET_DIR, "hero-id-card.jpg")
            shutil.copy(filepath, dest)
            print(f"Auto-renamed Hero ID Card: {filename} -> hero-id-card.jpg")
            continue

        # 3. Handle Logos (11_03PM)
        if "11_03PM" in filename:
            open_image(filepath)
            print(f"\nOpened image: {filename}")
            print("Select the correct name for this Brand Logo:")
            for key, val in LOGOS.items():
                print(f" [{key}] {val[1]} ({val[0]})")
            
            choice = input("Enter number: ").strip()
            if choice in LOGOS:
                dest_name = LOGOS[choice][0]
                shutil.copy(filepath, os.path.join(TARGET_DIR, dest_name))
                print(f"Saved as: {dest_name}")
                # Remove chosen option so you don't pick it twice
                del LOGOS[choice]
            else:
                print("Skipped / Invalid choice.")
            continue

        # 4. Handle Flyers and Banners (11_04PM)
        if "11_04PM" in filename:
            open_image(filepath)
            print(f"\nOpened image: {filename}")
            print("Select the correct name for this Flyer/Graphic:")
            for key, val in FLYERS.items():
                print(f" [{key}] {val[1]} ({val[0]})")
            
            choice = input("Enter number: ").strip()
            if choice in FLYERS:
                dest_name = FLYERS[choice][0]
                shutil.copy(filepath, os.path.join(TARGET_DIR, dest_name))
                print(f"Saved as: {dest_name}")
                del FLYERS[choice]
            else:
                print("Skipped / Invalid choice.")
            continue

    print("\n🎉 Asset organization complete! Check your public/images/ folder.")

if __name__ == "__main__":
    main()