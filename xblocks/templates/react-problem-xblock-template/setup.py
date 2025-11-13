"""
Setup for {XBlockName}

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='{xblock-name}',
    version='0.1.0',
    description='{XBlockName} - A React-based XBlock for Open edX',
    license='AGPL v3',
    packages=[
        '{xblock_name}',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            '{xblock_name} = {xblock_name}:{XBlockName}',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "{xblock_name}": [
            "static/*",
            "public/*",
        ],
    },
)
