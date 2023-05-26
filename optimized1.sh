for i in {1..10}; do sed "s/{{pod-name}}/pod-$i/g" pod-template.yaml | kubectl apply -f - ; done
