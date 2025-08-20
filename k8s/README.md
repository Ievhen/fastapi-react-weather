# ☸️Running with Kubernetes 
It's a simple Kubernetes deployment of the application for educational purposes. Tested on a [Minikube](https://minikube.sigs.k8s.io/docs/) Kubernetes cluster.

## Prerequisites
- `kubectl` installed and configured
- Access to a Kubernetes cluster (e.g. Minikube)
- You are in the root folder of the project

## Running the Application
For easy deployment, a [Kustomize](https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/) used.

1. Apply the Kubernetes configuration:
   ```bash
   kubectl apply -k k8s/
   ```

2. Forward the port to access the application locally:
    ```bash
    kubectl port-forward svc/nginx 8080:80
    ```
3. The application should now be available at:
http://localhost:8080

## Deleting the Application
To remove the Kubernetes resources created during deployment, run:

```bash
kubectl delete -k k8s/
```