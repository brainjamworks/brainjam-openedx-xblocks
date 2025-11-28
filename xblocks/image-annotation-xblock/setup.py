"""
Setup for ImageAnnotation

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='image-annotation-xblock',
    version='0.1.0',
    description='Image Annotation Assessment XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'image_annotation',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            'image_annotation = image_annotation:ImageAnnotationXBlock',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "image_annotation": [
            "static/*",
            "public/*",
        ],
    },
)
