"""
Setup for SortIntoBins

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='sort-into-bins-xblock',
    version='0.1.0',
    description='SortIntoBins - A React-based XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'sort_into_bins',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            'sort_into_bins = sort_into_bins:SortIntoBins',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "sort_into_bins": [
            "static/*",
            "public/*",
        ],
    },
)
