from models.base import Base

class Rectangle(Base):
    """A class that represents a rectangle.

    Args:
        Base: an argument passed
    """
    def __init__(self, width, height, x=0, y=0, id=None):
        """Initialize a new rectangle instance.

        Args:
            width: width of the rectangle
            height: height of th rectangle
            x: optional integer passed. Defaults to 0.
            y: optional integer passed. Defaults to 0.
            id: id of the rectangle. Defaults to None.
        """
        super().__init__(id)
        self.width = width
        self.height = height
        self.x = x
        self.y = y

    @property
    def width(self):
        """with object

        Returns: width
        """
        return self.__width

    @width.setter
    def width(self, value):
        """Set the width of the rectangle"""
        self.__width = value

    @property
    def height(self):
        """Returns the height of the rectangle

        Returns:
            : height of the rectangle
        """
        return self.__height

    @height.setter
    def height(self, value):
        """Sets the heght of the rectangle"""
        self.__height = value

    @property
    def x(self):
        """self for x

        Returns:
            : returns x
        """
        return self.__x

    @x.setter
    def x(self, value):
        self.__x = value

    @property
    def y(self):
        return self.__y

    @y.setter
    def y(self, value):
        self.__y = value
