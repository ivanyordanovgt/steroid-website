import os

def rename_js_to_jsx(root_folder):
    # Walk through all files and subfolders in the root folder
    for foldername, subfolders, filenames in os.walk(root_folder):
        for filename in filenames:
            # Check if the file ends with .js
            if filename.endswith('.js'):
                # Get the full path of the file
                old_path = os.path.join(foldername, filename)
                # Create new path with .jsx extension
                new_filename = filename[:-3] + '.jsx'
                new_path = os.path.join(foldername, new_filename)
                # Rename the file
                os.rename(old_path, new_path)
                print(f'Renamed: {old_path} -> {new_path}')

# Replace 'your_folder_path' with the actual folder path
rename_js_to_jsx('./components')
