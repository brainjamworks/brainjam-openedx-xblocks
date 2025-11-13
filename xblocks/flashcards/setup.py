"""
Setup for Flashcards

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='flashcards',
    version='0.1.0',
    description='Flashcards - A React-based XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'flashcards',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            'flashcards = flashcards:Flashcards',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "flashcards": [
            "static/*",
            "public/*",
        ],
    },
)
