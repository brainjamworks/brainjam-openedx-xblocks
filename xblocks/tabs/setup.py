"""
Setup for Tabs

Tabbed Content XBlock for organizing related educational content
"""

from setuptools import setup

setup(
    name='tabs',
    version='0.1.0',
    description='Tabs - Tabbed Content XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'tabs',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern
    entry_points={
        'xblock.v1': [
            'tabs = tabs:Tabs',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "tabs": [
            "static/*",
            "public/*",
        ],
    },
)
