"""
Setup for TimelinePresentation

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='timeline-presentation-xblock',
    version='0.1.0',
    description='TimelinePresentation - A React-based XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'timeline_presentation',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            'timeline_presentation = timeline_presentation:TimelinePresentation',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "timeline_presentation": [
            "static/*",
            "public/*",
        ],
    },
)
