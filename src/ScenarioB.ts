interface OrganizationalUnit {
    display(indent?: string): void;
  }
  
  class Employee implements OrganizationalUnit {
    constructor(private name: string) {}
  
    display(indent: string = ""): void {
      console.log(`${indent}- Employé : ${this.name}`);
    }
  }
  
  class Department implements OrganizationalUnit {
    private children: OrganizationalUnit[] = [];
  
    constructor(private name: string) {}
  
    add(unit: OrganizationalUnit): void {
      this.children.push(unit);
    }
  
    display(indent: string = ""): void {
      console.log(`${indent}+ Département : ${this.name}`);
      this.children.forEach(child => child.display(indent + "  "));
    }
  }
  
  const emp1 = new Employee("Alice");
  const emp2 = new Employee("Bob");
  const emp3 = new Employee("Claire");
  const emp4 = new Employee("David");
  
  const itDept = new Department("IT");
  itDept.add(emp1);
  
  const webDept = new Department("Web");
  webDept.add(emp2);
  
  const ventesDept = new Department("Ventes");
  ventesDept.add(emp3);
  
  const achatsDept = new Department("Achats");
  
  const rhDept = new Department("RH");
  rhDept.add(emp4);
  
  const comptaDept = new Department("Comptabilité");
  const adminDept = new Department("Administration");
  
  const techDept = new Department("Département technique");
  techDept.add(itDept);
  techDept.add(webDept);
  
  const commercialDept = new Department("Département commercial");
  commercialDept.add(ventesDept);
  commercialDept.add(achatsDept);
  
  const financierDept = new Department("Département financier");
  financierDept.add(rhDept);
  financierDept.add(comptaDept);
  financierDept.add(adminDept);
  
  
  