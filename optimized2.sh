for i in {1..10}; do sed "s/mypodIII/pod-$i/g" mypod3.yaml | kubectl apply -f - ; done
