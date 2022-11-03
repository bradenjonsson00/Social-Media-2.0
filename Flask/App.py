from flask import Flask, render_template, request, redirect
import sqlite3 as sql

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('student.html')

@app.route('/enternew')
def new_student():
    return render_template('student.html')

@app.route('/signup',methods = ['POST'])
def signup():
    if request.method == 'POST':
        try:
            username = request.form['username']
            password = request.form['password']
            
            with sql.connect("database.db") as con:
                cur = con.cursor()
                
                #check if username is in db
                search = 'SELECT COUNT(username) FROM accounts WHERE username="'
                search += username + '"'
                cur.execute(search)
                numberOfAccounts = (cur.fetchall()[0])[0]

                if numberOfAccounts > 0 : 
                    con.rollback()
                    msg = "Account already exists."
                    username=""
                else:
                    insert = 'INSERT INTO accounts (username,password) VALUES ("'
                    insert += username + '" ,"' + password + '")'

                    cur.execute(insert)
                    con.commit()
                    msg = "Account successfully created"

        except:
            con.rollback()
            msg = "Account creation error."
            username=""
      
        finally:
            return render_template("result.html",msg = msg, username=username)
            con.close()

@app.route('/login',methods = ['POST'])
def login():
    if request.method == 'POST':
        try:
            username = request.form['username']
            password = request.form['password']
            
            with sql.connect("database.db") as con:
                cur = con.cursor()

                search = 'SELECT COUNT(username) FROM accounts WHERE username="'
                search += username + '" AND password="' + password + '"'
                cur.execute(search)
                numberOfAccounts = (cur.fetchall()[0])[0]

                if numberOfAccounts == 1 :
                    msg = "Log in successful"
                else :
                    username=""
                    msg = "Log in error."
        except:
            con.rollback()
            msg = "Log in error."
            username=""
        
        finally:
            return render_template("result.html",msg = msg, username=username)
            con.close()

@app.route('/list')
def list():
    con = sql.connect("database.db")
    con.row_factory = sql.Row
   
    cur = con.cursor()
    cur.execute("select * from accounts")
   
    rows = cur.fetchall();
    return render_template("list.html",rows = rows)

if __name__ == '__main__':
    app.run(debug = True)
    