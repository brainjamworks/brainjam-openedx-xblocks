"""
Setup for Accordion

Accordion Content XBlock for organizing related educational content
"""

from setuptools import setup

setup(
    name='accordion',
    version='0.1.0',
    description='Accordion - Accordion Content XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'accordion',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern
    entry_points={
        'xblock.v1': [
            'accordion = accordion:Accordion',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "accordion": [
            "static/*",
            "public/*",
        ],
    },
)
