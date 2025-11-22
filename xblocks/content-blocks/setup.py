"""
Setup for Content Blocks

Content Blocks XBlock for simple vertical content presentation
"""

from setuptools import setup

setup(
    name='content_blocks',
    version='0.1.0',
    description='Content Blocks - Simple vertical content presentation for Open edX',
    license='AGPL v3',
    packages=[
        'content_blocks',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern
    entry_points={
        'xblock.v1': [
            'content_blocks = content_blocks:ContentBlocks',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "content_blocks": [
            "static/*",
            "public/*",
        ],
    },
)
