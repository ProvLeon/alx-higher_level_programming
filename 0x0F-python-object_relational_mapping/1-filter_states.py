#!/usr/bin/python3
"""
Lists all states with a name starting with N
"""
import sys
import MySQLdb


if __name__ == '__main__':
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2],
                         db=sys.argv[3], port=3306)

    cursor = db.cursor()
    cursor.execute("SELECT * FROM states\
        WHERE name LIKE 'N%'\
        ORDER BY id ASC")
    states = cursor.fetchall()

    for state in states:
        print(state)

    # Close the cursor and database connection
    cursor.close()
    db.close()
