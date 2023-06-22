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
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2],
                         db=sys.argv[3], port=3306)

    cursor = db.cursor()
    cursor.execute("SELECT * FROM states;")
    states = cursor.fetchall()

    for state in states:
        print(state)

    # Close the cursor and database connections
    cursor.close()
    db.close()
