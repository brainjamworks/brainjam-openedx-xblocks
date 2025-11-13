"""
Setup for DragDropMatching

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='drag-drop-matching-xblock',
    version='0.1.0',
    description='DragDropMatching - A React-based XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'drag_drop_matching',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            'drag_drop_matching = drag_drop_matching:DragDropMatching',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "drag_drop_matching": [
            "static/*",
            "public/*",
        ],
    },
)
