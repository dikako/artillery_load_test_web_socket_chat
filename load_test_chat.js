
{
  "config": {
      "target": "https://rc-chat-api.rctiplus.com/v1",
      "phases": [
        { 
            "duration": 60, 
            "arrivalRate": 100,
            "rampTo": 1000,
            "name": "Ini Ramp Up To Load"
        },
        {
          
          "duration": 120, 
          "arrivalRate": 1000,
          "rampTo": 10000,
          "name": "Ini Ramp Up To Load"
        },
      ],
      "defaults": {
        "headers": {
          "content-type": "application/json",
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWQiOjk5LCJ0b2tlbiI6ImNkNjNmYWEzNGQ1ZTk2OGUiLCJwbCI6IndlYiIsImRldmljZV9pZCI6IjY3ZDJkYWE5LTU0MGMtNDA5Ni1iYWJlLWZlOWY4NjVjMzI2ZSJ9.5nEWDByH8oxC-8nMx82Rgr_7sZ65QEMRaCY9Ge8wqq4"
        }
      }
  },

  "scenarios": [
    {
      "name": "kirim spam chat gan",
      "flow": [
        { "get": {"url": "/chats/1"}},
        { "think": 15 },
        { "post": {"url": "/chats/1", "json": {"msg": "{{ $randomString() }}","avatar":"","user": "{{ $randomString() }}"}}},
      ]
    }
  ]
}


