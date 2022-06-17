const PriorityQueue = require('./PriorityQueue')

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vert) {
        if (!this.adjacencyList[vert]) {
            this.adjacencyList[vert] = [];
        }
    }
    addEdge(vert1, vert2, weight) {
        this.adjacencyList[vert1].push({node:vert2, weight});
        this.adjacencyList[vert2].push({node:vert1, weight});
    }

    Dijkstra(start, finish) {
        const orderedPaths = new PriorityQueue();
        const distances = {};
        const prev = {};
        let shortest;
        let result = [];
        for (let vert in this.adjacencyList) {
            if (vert === start) {
                distances[vert] = 0;
                orderedPaths.enqueue(vert, 0);
            } else {
                distances[vert] = Infinity;
                orderedPaths.enqueue(vert, Infinity);
            }
            prev[vert] = null;
        }
        while (orderedPaths.values.length) {
            shortest = orderedPaths.dequeue().val;
            if (shortest === finish) {
                // Done
                while (prev[shortest]) {
                    result.push(shortest);
                    shortest = prev[shortest];
                }
                break;
            }
            if (shortest || distances[shortest] !== Infinity) {
                for (let neighbor in this.adjacencyList[shortest]) {
                    let nextStop = this.adjacencyList[shortest][neighbor];
                    let target = distances[shortest] + nextStop.weight;
                    let nextNeighbor = nextStop.node;
                    if (target < distances[nextNeighbor]) {
                        distances[nextNeighbor] = target;
                        prev[nextNeighbor] = shortest;
                        orderedPaths.enqueue(nextNeighbor, target);
                    }
                }
            }
        }
        return result.concat(shortest).reverse();
    }
}

module.exports = Graph