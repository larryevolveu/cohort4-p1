
import sqlite3
import sys
import traceback

db_name = 'pipeline.db'


def hello():
    return "Hello World from sql.py"

def get_pipelines():

    res = select(
        "select id, name from projects;",
        []
    )
    return res


def insert_pipeline(name, data):
	return sql_util(
		"insert into projects (name, data) values(?,?);",
		[name, data]
	)

def update_pipeline(id, name, data):
	return sql_util(
		"update projects set name = ?, data = ? where id = ?;",
		[name, data, id]
	)


def load_pipeline(id):
	res = select(
		"select data from projects where id = ?;",
		[id]
	)
	return res[0][0]

# ----- general utilitis

def select(sql, parms):
	""" 
	Execute standard sql statements.
	"""
	results = []
	try:
		conn = sqlite3.connect(db_name)
		cur = conn.cursor()
		cur.execute(sql, parms)
		for r in cur:
			results.append(r)

	except:
		print('***We had a problem Huston...', sys.exc_info())
		traceback.print_exception(sys.exc_info()[0],sys.exc_info()[1],sys.exc_info()[2])
		raise
	finally:
		cur.close()
		conn.close()

	return results

def sql_util(sql, parms):
	""" 
	Run general maintaince statements.
	"""
	lastid = 0
	try:
		conn = sqlite3.connect(db_name)
		cur = conn.cursor()
		cur.execute(sql, parms)
		conn.commit()
		lastid = cur.lastrowid

	except:
		print('***We had a problem Huston...', sys.exc_info())
		traceback.print_exception(sys.exc_info()[0],sys.exc_info()[1],sys.exc_info()[2])
		raise
	finally:
		cur.close()
		conn.close()

	return lastid
