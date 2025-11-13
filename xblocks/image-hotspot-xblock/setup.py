"""
Setup for Image Hotspot XBlock
"""

from setuptools import setup

setup(
    name='image-hotspot-xblock',
    version='0.1.0',
    description='Image Hotspot - Interactive image-based quiz XBlock for Open edX',
    author='BrainJam',
    license='AGPL v3',
    packages=[
        'image_hotspot',
    ],
    install_requires=[
        'XBlock',
    ],
    entry_points={
        'xblock.v1': [
            'image_hotspot = image_hotspot:ImageHotspot',
        ]
    },
    package_data={
        "image_hotspot": [
            "static/*",
            "public/*",
        ],
    },
)
