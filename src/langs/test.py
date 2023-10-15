import json

def find_missing_keys(json1, json2, prefix=""):
    # Initialize a set to store missing keys
    missing_keys = set()

    # Iterate through keys in json1
    for key in json1:
        # Build the full key path (including prefixes for nested keys)
        full_key = f"{prefix}.{key}" if prefix else key

        # Check if the key exists in json2
        if full_key not in json2:
            missing_keys.add(full_key)

        # If the value is a nested dictionary, recursively check its keys
        if isinstance(json1[key], dict) and full_key in json2:
            missing_keys.update(find_missing_keys(json1[key], json2[full_key], full_key))

    return missing_keys

# Load JSON data from files
with open('spanish.json', 'r') as file1, open('desmadrero.json', 'r') as file2:
    json1 = json.load(file1)
    json2 = json.load(file2)

# Find missing keys in json2 compared to json1 (including nested keys)
missing_keys = find_missing_keys(json1, json2)

print("Missing keys in json2 compared to json1:")
for key in missing_keys:
    print(key)
