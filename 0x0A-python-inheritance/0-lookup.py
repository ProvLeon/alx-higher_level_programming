#!/usr/bin/python3

"""Defines an object's attribute lookup Function"""

def lookup(obj):
    """Returns a list of attributes available for an object"""
    return (dir(obj))
