#!/usr/bin/python3
"""
Script that prints all City objects from the database hbtn_0e_14_usa.
"""

import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from model_state import Base, State
from model_city import City


def print_cities_by_state(username, password, db_name):
    """
    Print all City objects from the database hbtn_0e_14_usa.
    """
    engine = create_engine(
        f'mysql+mysqldb://{username}:{password}@localhost:3306/{db_name}'
        )
    Base.metadata.create_all(engine)

    session = Session(engine)
    cities = session.query(City).order_by(City.id).all()

    for city in cities:
        state_name = session.query(State.name).filter_by(
            id=city.state_id
            ).first()[0]
        print(f"{state_name}: ({city.id}) {city.name}")

    session.close()


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: {} <username> <password> <db_name>".format(sys.argv[0]))
        sys.exit(1)

    print_cities_by_state(sys.argv[1], sys.argv[2], sys.argv[3])
