#!/usr/bin/python3
""" This defines the Mylist class """

class MyList(list):
    """a subclass of the list"""
    def __init__(self):
        """initialize the object"""
        super().__init__()

    def print_sorted(self):
        """prints the sorted list"""
        print(sorted(self))
