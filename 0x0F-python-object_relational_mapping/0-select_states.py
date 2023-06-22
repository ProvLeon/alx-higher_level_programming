#!/usr/bin/python3
"""
Lists all states from the database hbtn_0e_0_usa
"""
import sys
import MySQLdb


# `if __name__ == '__main__':` is a conditional statement that checks if the current script is being
# run as the main program. If it is, then the code inside the block will be executed. This is a common
# Python idiom used to prevent code from being executed when a module is imported as a library.
if __name__ == '__main__':
    # `db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3], port=3306)` is
    # establishing a connection to a MySQL database using the credentials provided as command line
    # arguments. `sys.argv[1]` is the first argument, which is the username, `sys.argv[2]` is the
    # second argument, which is the password, and `sys.argv[3]` is the third argument, which is the
    # name of the database. The `port` parameter specifies the port number to use for the connection,
    # which is 3306 for MySQL. The `MySQLdb.connect()` method returns a connection object that can be
    # used to interact with the database.
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2],
                         db=sys.argv[3], port=3306)

    cursor = db.cursor()
    cursor.execute("SELECT * FROM states;")
    states = cursor.fetchall()

    for state in states:
        print(state)

    # Close the cursor and database connection
    cursor.close()
    db.close()
