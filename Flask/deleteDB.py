import sqlite3

conn = sqlite3.connect('database.db')
print("Opened database successfully")

conn.execute('DROP TABLE accounts')
print("Table deleted successfully")
conn.close()