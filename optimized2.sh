for i in {1..10}; do sed "s/{{pod-name}}/pod-$i/g" mypod3.yaml | kubectl apply -f - ; done
