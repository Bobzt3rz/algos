export type Point = {
    x: number,
    y: number,
}
// this is super bad, doesn't even work if there are branching paths
export const solve_old = (maze: string[], wall: string, start: Point, end: Point): Point[] => {

    const path: Point[] = [start];
    // down is positive y
    // right is positive x
    const walk = (position: Point) => {
        const { x, y } = position;
        const up: Point = {
            x,
            y: y - 1,
        }
        const down: Point = {
            x,
            y: y + 1,
        }
        const right: Point = {
            x: x + 1,
            y,
        }
        const left: Point = {
            x: x - 1,
            y,
        }
        const possiblePaths: Point[] = [down, up, left, right];
        const walkable: Point[] = possiblePaths.reduce<Point[]>((acc, point) => {
            const { x, y } = point;
            // not out of bounds
            if (y < maze.length && maze[y] && x < maze[y].length) {
                // not a wall
                if (maze[y][x] !== wall) {
                    // isn't path that has been taken
                    if (!path.find((val) => {
                        return (val.x == x && val.y == y)
                    })) {
                        return [...acc, point]
                    }
                }
            }
            return acc;
        }, [])
        for (let i = 0; i < walkable.length; i++) {
            path.push(walkable[i]);
            if (end.x == walkable[i].x && end.y == walkable[i].y) {
                return
            }
            walk(walkable[i]);
        }
    }
    walk(start)
    return path;
}


// version 2

const dir = [[0, -1], [1, 0], [0, 1], [-1, 0]]

export const solve = (maze: string[], wall: string, start: Point, end: Point): Point[] => {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    const walk = (pos: Point): boolean => {
        const { x, y } = pos;
        // base case
        // out of bounds
        if (!(y < maze.length && maze[y] && x < maze[y].length)) {
            return false;
        }
        // is a wall
        if (maze[y][x] == wall) {
            return false;
        }
        // seen
        if (seen[y][x] == true) {
            return false;
        }
        // end
        if (end.y == y && end.x == x) {
            path.push(pos);
            return true
        }
        // pre
        seen[y][x] = true;
        path.push(pos);

        for (let i = 0; i < dir.length; i++) {
            // if found end, directly exit
            if (
                walk({
                    x: x + dir[i][0],
                    y: y + dir[i][1]
                })) {
                return true
            }
        }

        // post
        path.pop()
        return false

    }
    walk(start);
    return path;

}
