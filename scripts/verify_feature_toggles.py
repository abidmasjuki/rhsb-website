import os
import json
import re

def verify_feature_toggles():
    print("==================================================")
    print("RPWP Healthcare - Feature Toggle System Verification")
    print("==================================================\n")
    
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    html_files = ["index.html", "audiometric-mobile.html", "eecp.html", "ppe.html"]
    
    errors = 0
    warnings = 0
    
    # 1. Verify config.json
    config_path = os.path.join(root_dir, "config.json")
    print("[*] Checking config.json... ", end="")
    if not os.path.exists(config_path):
        print("FAIL (config.json does not exist)")
        errors += 1
    else:
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                config_data = json.load(f)
            if "features" in config_data and "eecp" in config_data["features"] and "ppe" in config_data["features"]:
                print(f"PASS (v{config_data.get('version', 'unknown')})")
            else:
                print("FAIL (features keys missing)")
                errors += 1
        except Exception as e:
            print(f"FAIL (JSON parse error: {e})")
            errors += 1

    # 2. Verify feature-toggle.js
    engine_path = os.path.join(root_dir, "js", "feature-toggle.js")
    print("[*] Checking js/feature-toggle.js... ", end="")
    if os.path.exists(engine_path):
        print("PASS")
    else:
        print("FAIL (File missing)")
        errors += 1

    # 3. Verify settings.html
    settings_path = os.path.join(root_dir, "settings.html")
    print("[*] Checking settings.html... ", end="")
    if os.path.exists(settings_path):
        print("PASS")
    else:
        print("FAIL (File missing)")
        errors += 1

    # 4. Verify script loading and tags in all HTML files
    for filename in html_files:
        filepath = os.path.join(root_dir, filename)
        print(f"\n[*] Auditing {filename}...")
        
        if not os.path.exists(filepath):
            print(f"    FAIL: {filename} missing")
            errors += 1
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # A. Check script injection
        script_pattern = r'<script[^>]*src=["\']js/feature-toggle\.js[^"\']*["\'][^>]*>'
        if re.search(script_pattern, content):
            print("    [OK] Loaded js/feature-toggle.js in head")
        else:
            print("    [ERR] missing js/feature-toggle.js loading in head")
            errors += 1
            
        # B. Check specific homepage elements
        if filename == "index.html":
            if 'id="eecp-teaser" data-feature="eecp"' in content or 'data-feature="eecp" id="eecp-teaser"' in content or ('id="eecp-teaser"' in content and 'data-feature="eecp"' in content):
                print("    [OK] Homepage #eecp-teaser section tagged")
            else:
                print("    [ERR] Homepage #eecp-teaser section NOT tagged")
                errors += 1
                
            if 'id="products" data-feature="ppe"' in content or 'data-feature="ppe" id="products"' in content:
                print("    [OK] Homepage #products section tagged")
            else:
                print("    [ERR] Homepage #products section NOT tagged")
                errors += 1

        # Check navigation menu items
        nav_eecp_matches = re.findall(r'<li[^>]*data-feature="eecp"[^>]*>.*?eecp\.html', content, re.DOTALL)
        nav_ppe_matches = re.findall(r'<li[^>]*data-feature="ppe"[^>]*>.*?ppe\.html', content, re.DOTALL)
        
        if len(nav_eecp_matches) > 0:
            print("    [OK] Navigation/Footer lists for EECP tagged")
        else:
            print("    [WARN] Navigation/Footer lists for EECP might not be fully tagged")
            warnings += 1
            
        if len(nav_ppe_matches) > 0:
            print("    [OK] Navigation/Footer lists for PPE tagged")
        else:
            print("    [WARN] Navigation/Footer lists for PPE might not be fully tagged")
            warnings += 1
            
    print("\n==================================================")
    print(f"Verification completed: {errors} Errors, {warnings} Warnings")
    print("==================================================")
    
    return errors == 0

if __name__ == "__main__":
    verify_feature_toggles()
