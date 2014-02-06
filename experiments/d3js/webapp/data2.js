function data2(){
var root={
  "t0": null,
  "t1": null,
  "ts": 0,
  "type": "root",
  "name": "root",
  "descr": "root",
  "status": null,
  "entries": [
    {
      "t0": "2014-02-06T07:10:51.381+0000",
      "t1": "2014-02-06T07:10:51.404+0000",
      "ts": 23,
      "type": "workflow",
      "name": "WORKF001 - WorkflowProcessor",
      "descr": "WorkflowProcessor",
      "status": "OK",
      "entries": [
        {
          "t0": "2014-02-06T07:10:51.381+0000",
          "t1": "2014-02-06T07:10:51.381+0000",
          "ts": 0,
          "type": "activity",
          "name": "ACT001 - ReceiveMessageActivity",
          "descr": "ReceiveMessageActivity",
          "status": "OK",
          "entries": [
            {
              "t0": "2014-02-06T07:10:51.381+0000",
              "t1": "2014-02-06T07:10:51.381+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT001 - TASK001",
              "descr": "ReceiveMessageTask",
              "status": "OK",
              "entries": []
            },
            {
              "t0": "2014-02-06T07:10:51.381+0000",
              "t1": "2014-02-06T07:10:51.381+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT001 - TASK002",
              "descr": "FilterMessageTask",
              "status": "OK",
              "entries": []
            },
            {
              "t0": "2014-02-06T07:10:51.381+0000",
              "t1": "2014-02-06T07:10:51.381+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT001 - TASK003",
              "descr": "CreateCommandTask",
              "status": "OK",
              "entries": []
            },
            {
              "t0": "2014-02-06T07:10:51.381+0000",
              "t1": "2014-02-06T07:10:51.381+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT001 - TASK004",
              "descr": "DispatchCommandTask",
              "status": "OK",
              "entries": []
            }
          ]
        },
        {
          "t0": "2014-02-06T07:10:51.381+0000",
          "t1": "2014-02-06T07:10:51.404+0000",
          "ts": 23,
          "type": "activity",
          "name": "ACT002 - ExecuteCommandActivity",
          "descr": "ExecuteCommandActivity",
          "status": "OK",
          "entries": [
            {
              "t0": "2014-02-06T07:10:51.382+0000",
              "t1": "2014-02-06T07:10:51.382+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT002 - TASK001",
              "descr": "ReceiveCommandTask",
              "status": "OK",
              "entries": []
            },
            {
              "t0": "2014-02-06T07:10:51.382+0000",
              "t1": "2014-02-06T07:10:51.382+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT002 - TASK002",
              "descr": "EnrichCommandTask",
              "status": "OK",
              "entries": []
            },
            {
              "t0": "2014-02-06T07:10:51.382+0000",
              "t1": "2014-02-06T07:10:51.382+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT002 - TASK003",
              "descr": "FilterCommandTask",
              "status": "OK",
              "entries": []
            },
            {
              "t0": "2014-02-06T07:10:51.382+0000",
              "t1": "2014-02-06T07:10:51.382+0000",
              "ts": 0,
              "type": "task",
              "name": "ACT002 - TASK004",
              "descr": "ValidateCommandTask",
              "status": "OK",
              "entries": []
            },
            {
              "t0": "2014-02-06T07:10:51.382+0000",
              "t1": "2014-02-06T07:10:51.404+0000",
              "ts": 22,
              "type": "task",
              "name": "ACT002 - TASK005",
              "descr": "ExecuteCommandTask",
              "status": "OK",
              "entries": [
                {
                  "t0": "2014-02-06T07:10:51.382+0000",
                  "t1": "2014-02-06T07:10:51.404+0000",
                  "ts": 22,
                  "type": "operation",
                  "name": "OPER001",
                  "descr": "Operation",
                  "status": "OK",
                  "entries": [
                    {
                      "t0": "2014-02-06T07:10:51.382+0000",
                      "t1": "2014-02-06T07:10:51.382+0000",
                      "ts": 0,
                      "type": "function",
                      "name": "Filter",
                      "descr": null,
                      "status": "OK",
                      "entries": []
                    },
                    {
                      "t0": "2014-02-06T07:10:51.382+0000",
                      "t1": "2014-02-06T07:10:51.382+0000",
                      "ts": 0,
                      "type": "function",
                      "name": "Validate",
                      "descr": null,
                      "status": "OK",
                      "entries": []
                    },
                    {
                      "t0": "2014-02-06T07:10:51.382+0000",
                      "t1": "2014-02-06T07:10:51.382+0000",
                      "ts": 0,
                      "type": "function",
                      "name": "Enrich",
                      "descr": null,
                      "status": "OK",
                      "entries": [
                        {
                          "t0": "2014-02-06T07:10:51.382+0000",
                          "t1": "2014-02-06T07:10:51.382+0000",
                          "ts": 0,
                          "type": "step",
                          "name": "ENRICH001",
                          "descr": "",
                          "status": "OK",
                          "entries": []
                        }
                      ]
                    },
                    {
                      "t0": "2014-02-06T07:10:51.382+0000",
                      "t1": "2014-02-06T07:10:51.404+0000",
                      "ts": 22,
                      "type": "function",
                      "name": "Process",
                      "descr": null,
                      "status": "OK",
                      "entries": [
                        {
                          "t0": "2014-02-06T07:10:51.382+0000",
                          "t1": "2014-02-06T07:10:51.404+0000",
                          "ts": 22,
                          "type": "step",
                          "name": "PROC001",
                          "descr": "",
                          "status": "OK",
                          "entries": []
                        }
                      ]
                    },
                    {
                      "t0": "2014-02-06T07:10:51.404+0000",
                      "t1": "2014-02-06T07:10:51.404+0000",
                      "ts": 0,
                      "type": "function",
                      "name": "Dispatch",
                      "descr": null,
                      "status": "OK",
                      "entries": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

return root;
}