for i in {1..10}; do sed "s/mypodI/podI-$i/g" mypod1.yaml | kubectl apply -f - ; done
