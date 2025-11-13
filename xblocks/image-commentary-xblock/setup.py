"""
Setup for ImageCommentary

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='image-commentary',
    version='0.1.0',
    description='ImageCommentary - A React-based XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'image_commentary',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            'image_commentary = image_commentary:ImageCommentary',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "image_commentary": [
            "static/*",
            "public/*",
        ],
    },
)
