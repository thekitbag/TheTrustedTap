import azure.functions as func
import logging

app = func.FunctionApp()

@app.function_name(name="HttpTrigger1")
@app.route(route="ping")
def ping(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Ping received.')

    if req.method == 'OPTIONS':
        # Handle preflight requests (important for CORS)
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return func.HttpResponse('', status_code=204, headers=headers)
    
    if req.method == 'POST':
        headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600'
        }
        return func.HttpResponse("Pong", status_code=200, headers=headers)

    else: 
        return func.HttpResponse("HTTP trigger function processed a request, but the method is not allowed.", status_code=405) 


