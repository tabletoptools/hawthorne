
export abstract class AbstractResourceArrayService {

    abstract type: string;


    getNextID(): Promise<number> {
        return new Promise(
            (resolve) => {
                this.getObjects().then(
                    (result: any[]) => {
                        if (result.length === 0) resolve(1);
                        else resolve(Math.max(...result.map((obj => obj.id))) + 1);
                    }
                )
            }
        )
    }

    getObjects(): Promise<any[]> {
        let objects: any[] = localStorage.getItem(this.type) ? JSON.parse(localStorage.getItem(this.type)) : [];
        if (objects.length === 0) localStorage.setItem(this.type, JSON.stringify([]));
        return Promise.resolve(objects);
    }

    getObject(id): Promise<any> {
        return new Promise(
            (resolve) => {
                this.getObjects()
                    .then(
                        (objects: any[]) => {
                            resolve(objects.find(object => object.id === id))
                        }
                    )
            }
        )
    }

    createObject(object: any): Promise<any> {
        return new Promise(
            (resolve) => {
                this.getNextID().then(
                    id => {
                        object.id = id;
                        this.getObjects()
                            .then(
                                (objects) => {
                                    objects.push(object);
                                    this.setObjects(objects)
                                        .then(
                                            objects => resolve(object)
                                        )
                                }
                            )

                    }
                )
            }
        )
    }

    setObjects(objects: any[]): Promise<any[]> {
        return new Promise(
            (resolve) => {
                window.localStorage.setItem(this.type, JSON.stringify(objects));
                resolve(objects);
            }
        )
    }

    updateObject(object: any): Promise<any> {

        return new Promise(
            (resolve) => {
                this.getObjects().then(
                    (objects: any[]) => {
                        objects[objects.indexOf(objects.find(a => a.id === object.id))] = object;
                        this.setObjects(objects).then(
                            (objects) => resolve(object)
                        )

                    }
                )
            }
        )
    }

    deleteObject(object: any): Promise<boolean> {
        return new Promise(
            (resolve) => {
                this.getObjects().then(
                    (objects: any[]) => {
                        objects.splice(objects.indexOf(objects.find(a => a.id === object.id)), 1);
                        this.setObjects(objects).then(
                            (objects) => resolve(true)
                        )
                    }
                )
            }
        )
    }

}
