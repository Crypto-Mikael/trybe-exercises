from socketserver import TCPServer, StreamRequestHandler

class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, cliente\n")
        print(self.rfile.readline().strip().decode("UTF-8"))

server_adress = ("localhost", 8080)
with TCPServer(server_adress, TCPHandler) as server:
    print("Server TCP runnig")
    server.serve_forever()