"""
Setup for AudioPlayer

IMPLEMENTATION: Update metadata for your XBlock
ARCHITECTURAL: Keep the structure and entry_points pattern
"""

from setuptools import setup

# IMPLEMENTATION: Update these values for your XBlock
setup(
    name='audio-player-xblock',
    version='0.1.0',
    description='AudioPlayer - A React-based XBlock for Open edX',
    license='AGPL v3',
    packages=[
        'audio_player',
    ],
    install_requires=[
        'XBlock',
    ],
    # ARCHITECTURAL: Entry points pattern (update xblock_name)
    entry_points={
        'xblock.v1': [
            'audio_player = audio_player.audio_player:AudioPlayer',
        ]
    },
    # ARCHITECTURAL: Package data to include static and public files
    package_data={
        "audio_player": [
            "static/*",
            "public/*",
        ],
    },
)
