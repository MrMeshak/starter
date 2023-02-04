import { startStandaloneServer } from "@apollo/server/standalone";
import server from "./apollo/index.js";
const startServer = async ()=>{
    const { url  } = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    });
    console.log(`Server is ready at: ${url}`);
};
startServer();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RhcnRTdGFuZGFsb25lU2VydmVyIH0gZnJvbSAnQGFwb2xsby9zZXJ2ZXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4vYXBvbGxvL2luZGV4LmpzJztcblxuY29uc3Qgc3RhcnRTZXJ2ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzdGFydFN0YW5kYWxvbmVTZXJ2ZXIoc2VydmVyLCB7XG4gICAgbGlzdGVuOiB7IHBvcnQ6IDQwMDAgfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coYFNlcnZlciBpcyByZWFkeSBhdDogJHt1cmx9YCk7XG59O1xuXG5zdGFydFNlcnZlcigpO1xuIl0sIm5hbWVzIjpbInN0YXJ0U3RhbmRhbG9uZVNlcnZlciIsInNlcnZlciIsInN0YXJ0U2VydmVyIiwidXJsIiwibGlzdGVuIiwicG9ydCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLHFCQUFxQixRQUFRLDRCQUE0QjtBQUNsRSxPQUFPQyxZQUFZLG9CQUFvQjtBQUV2QyxNQUFNQyxjQUFjLFVBQVk7SUFDOUIsTUFBTSxFQUFFQyxJQUFHLEVBQUUsR0FBRyxNQUFNSCxzQkFBc0JDLFFBQVE7UUFDbERHLFFBQVE7WUFBRUMsTUFBTTtRQUFLO0lBQ3ZCO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixFQUFFSixJQUFJLENBQUM7QUFDMUM7QUFFQUQifQ==