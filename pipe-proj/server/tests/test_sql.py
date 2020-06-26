
import persist.sql as persist

name1 = "db pipe 1"
data1 = "data 1"

def test_hello_world():
    assert(persist.hello() == "Hello World from sql.py")

"""
- refresh
- check 0 projects
- inserts
- check > 0 projects
- refresh
- check 0 projects

"""

def test_crud():
    refresh_db()
    pipelines = persist.get_pipelines()
    assert(len(pipelines) == 0)

    insert_test_data()
    pipelines = persist.get_pipelines()
    assert(len(pipelines) == 3)

    data = persist.load_pipeline(pipelines[0][0])
    assert(data == data1)

    refresh_db()
    pipelines = persist.get_pipelines()
    assert(len(pipelines) == 0)

    id = persist.insert_pipeline(name1, data1)
    data = persist.load_pipeline(id)

    persist.update_pipeline(id, 'Changed', 'Changed')
    data = persist.load_pipeline(id)
    assert(data == 'Changed')


# Create some data for testing
def test_insert():
    insert_test_data()

def insert_test_data():
    persist.insert_pipeline(name1, data1)
    persist.insert_pipeline("db pipe 2", "data 2")
    persist.insert_pipeline("db pipe 3", "data 3")

def refresh_db():
    create_table = """
CREATE TABLE "projects" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"name"	TEXT NOT NULL,
	"data"	TEXT
);
"""
    persist.sql_util("drop table projects;",[])
    persist.sql_util(
        create_table,
        []
    )