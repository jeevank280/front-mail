import os

def replace_string_in_file(file_path, old_string, new_string):
    """
    Replace all occurrences of old_string with new_string in the specified file.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Replace the string
        updated_content = content.replace(old_string, new_string)

        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)

        print(f"Replaced in file: {file_path}")
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")

def replace_in_all_dirs(base_path, old_string, new_string):
    """
    Recursively replace old_string with new_string in all files within each directory starting from base_path.
    """
    for root, _, files in os.walk(base_path):
        for file in files:
            file_path = os.path.join(root, file)
            replace_string_in_file(file_path, old_string, new_string)

if __name__ == "__main__":
    base_path = "./"
    old_string = "heroui"
    new_string = "heroui"

    if os.path.isdir(base_path):
        replace_in_all_dirs(base_path, old_string, new_string)
        print("String replacement completed across all directories.")
    else:
        print("Invalid base directory path.")